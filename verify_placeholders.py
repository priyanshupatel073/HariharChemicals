import time
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width': 1440, 'height': 960})

    # 1. Hero Card
    page.goto('http://localhost:4173', wait_until='networkidle')
    time.sleep(1)
    page.screenshot(path='d:/HariharChemicals/verify_hero_placeholder.png', full_page=False)

    # 2. Manufacturing Section Montage
    equip_elem = page.locator('#manufacturing')
    if equip_elem.count() > 0:
        equip_elem.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='d:/HariharChemicals/verify_equipment_placeholder.png', full_page=False)

    # 3. Packaging Section
    pkg_elem = page.locator('#packaging')
    if pkg_elem.count() > 0:
        pkg_elem.scroll_into_view_if_needed()
        time.sleep(1)
        page.screenshot(path='d:/HariharChemicals/verify_packaging_placeholder.png', full_page=False)

    # 4. About Page
    page.goto('http://localhost:4173/about', wait_until='networkidle')
    time.sleep(1)
    page.screenshot(path='d:/HariharChemicals/verify_about_placeholder.png', full_page=False)

    browser.close()

print('Placeholder verification screenshots captured successfully!')
