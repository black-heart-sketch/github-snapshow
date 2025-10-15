from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")
        page.wait_for_selector("body", timeout=30000)
        page.screenshot(path="jules-scratch/verification/01_initial.png")

        # Change language to French
        page.click('button[aria-label="Change language"]')
        page.click('text="Français"')
        page.wait_for_timeout(1000) # wait for language to change
        page.screenshot(path="jules-scratch/verification/02_french.png")

        # Change theme to light
        page.click('button[aria-label="Toggle theme"]')
        page.click('text="Light"')
        page.wait_for_timeout(1000) # wait for theme to change
        page.screenshot(path="jules-scratch/verification/03_light.png")

        browser.close()

if __name__ == "__main__":
    run()