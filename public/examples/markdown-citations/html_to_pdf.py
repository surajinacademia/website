"""Print a local Pandoc HTML document after MathJax finishes rendering."""
import argparse
from pathlib import Path

from playwright.sync_api import sync_playwright

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("html", type=Path)
parser.add_argument("pdf", type=Path)
args = parser.parse_args()

with sync_playwright() as playwright:
    browser = playwright.chromium.launch()
    try:
        page = browser.new_page()
        page.goto(args.html.resolve().as_uri(), wait_until="load")
        if page.locator(".math").count():
            page.wait_for_function(
                "window.MathJax && MathJax.startup && MathJax.startup.promise"
            )
            page.evaluate("async () => { await MathJax.startup.promise; }")
            if page.locator("mjx-merror, [data-mjx-error]").count():
                raise RuntimeError("MathJax could not render an equation.")
        page.evaluate("async () => { await document.fonts.ready; }")
        page.pdf(path=str(args.pdf), format="A4", print_background=True)
    finally:
        browser.close()
