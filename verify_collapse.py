import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Mobile Viewport (390 x 844)
    page = browser.new_page(viewport={'width': 390, 'height': 844})
    page.goto('http://localhost:4173/shade-card', wait_until='networkidle')
    time.sleep(1)
    
    # Scroll to the shade card workstation
    page.locator('#shade-card').scroll_into_view_if_needed()
    time.sleep(0.5)
    page.screenshot(path='d:/HariharChemicals/mobile_shadecard_expanded.png', full_page=False)
    
    # Tap the Quick Collapse Toolbar
    collapse_btn = page.locator('.mobile-collapse-toolbar button')
    if collapse_btn.is_visible():
        collapse_btn.click()
        # Wait for the 0.38s cubic-bezier animation
        time.sleep(0.6)
        page.screenshot(path='d:/HariharChemicals/mobile_shadecard_collapsed.png', full_page=False)

    # 2. Desktop Viewport (1400 x 900)
    page_dt = browser.new_page(viewport={'width': 1400, 'height': 900})
    page_dt.goto('http://localhost:4173/shade-card', wait_until='networkidle')
    time.sleep(1)
    page_dt.locator('#shade-card').scroll_into_view_if_needed()
    time.sleep(0.5)
    page_dt.screenshot(path='d:/HariharChemicals/desktop_shadecard.png', full_page=False)

    browser.close()

print('COLLAPSE ANIMATION SCREENSHOTS CAPTURED!')
