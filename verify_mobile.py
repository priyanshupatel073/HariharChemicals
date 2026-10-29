import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    
    # 1. Mobile Home Viewport (390 x 844 - iPhone 14 / 15)
    page = browser.new_page(viewport={'width': 390, 'height': 844})
    page.goto('http://localhost:4173', wait_until='networkidle')
    time.sleep(1)
    page.screenshot(path='d:/HariharChemicals/mobile_390_hero.png', full_page=False)
    
    # 2. Scroll to Metrics and Catalog
    page.evaluate('window.scrollBy(0, 750)')
    time.sleep(0.5)
    page.screenshot(path='d:/HariharChemicals/mobile_390_catalog.png', full_page=False)

    # 3. Scroll to Shade Card
    page.evaluate('window.scrollBy(0, 850)')
    time.sleep(0.5)
    page.screenshot(path='d:/HariharChemicals/mobile_390_shadecard.png', full_page=False)

    # 4. Scroll to Equipment & Photos
    page.evaluate('window.scrollBy(0, 950)')
    time.sleep(0.5)
    page.screenshot(path='d:/HariharChemicals/mobile_390_equipment.png', full_page=False)

    # 5. Scroll to Footer
    page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
    time.sleep(0.5)
    page.screenshot(path='d:/HariharChemicals/mobile_390_footer.png', full_page=False)

    # 6. Test Mobile Hamburger Drawer
    page.evaluate('window.scrollTo(0, 0)')
    time.sleep(0.5)
    hamburger = page.locator('button.mobile-menu-btn')
    if hamburger.is_visible():
        hamburger.click()
        time.sleep(0.5)
        page.screenshot(path='d:/HariharChemicals/mobile_390_drawer.png', full_page=False)
        # Close drawer
        hamburger.click()
        time.sleep(0.3)

    # 7. Test Mobile RFQ Modal
    rfq_btn = page.locator('button.navbar-rfq-btn')
    if rfq_btn.is_visible():
        rfq_btn.click()
        time.sleep(0.5)
        page.screenshot(path='d:/HariharChemicals/mobile_390_rfq.png', full_page=False)

    # 8. Extra Small Android Device Viewport (360 x 740 - Samsung Galaxy S / Budget Android)
    page_sm = browser.new_page(viewport={'width': 360, 'height': 740})
    page_sm.goto('http://localhost:4173', wait_until='networkidle')
    time.sleep(1)
    page_sm.screenshot(path='d:/HariharChemicals/mobile_360_hero.png', full_page=False)

    browser.close()

print('ALL MOBILE SCREENSHOTS CAPTURED SUCCESSFULLY!')
