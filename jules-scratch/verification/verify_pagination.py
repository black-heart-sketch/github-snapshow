from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")
        page.wait_for_selector("#projects", timeout=60000)
        page.screenshot(path="jules-scratch/verification/01_initial.png")

        # Click the next button
        page.click('a[aria-label="Go to next page"]')
        page.wait_for_timeout(1000) # wait for page to change
        page.screenshot(path="jules-scratch/verification/02_next_page.png")

        browser.close()

if __name__ == "__main__":
    run()