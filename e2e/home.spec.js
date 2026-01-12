import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    // Wait for Vue app to hydrate
    await page.waitForSelector('h1')
  })

  test('should load the home page', async ({ page }) => {
    await expect(page).toHaveTitle(/Irene/)
  })

  test('should display hero content', async ({ page }) => {
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Wangari')
    await expect(heading).toContainText('Irene')
  })

  test('should display metrics section', async ({ page }) => {
    // Scroll down to metrics section using heading role
    await page.getByRole('heading', { name: 'Proven Results' }).scrollIntoViewIfNeeded()
    await expect(page.getByRole('heading', { name: '500+' })).toBeVisible()
    await expect(page.getByRole('heading', { name: '98%' })).toBeVisible()
    await expect(page.getByRole('heading', { name: '280%' })).toBeVisible()
  })

  test('should navigate to about page', async ({ page }) => {
    // Click the About link in the header navigation
    await page.getByRole('banner').getByRole('link', { name: 'About' }).click()
    await expect(page).toHaveURL(/\/about/)
  })

  test('should toggle theme', async ({ page }) => {
    // Theme toggle button has aria-label "Toggle theme"
    const themeButton = page.getByRole('button', { name: 'Toggle theme' })
    await expect(themeButton).toBeVisible()

    // Check initial state - should have dark class or light class
    const htmlElement = page.locator('html')
    const initialClass = await htmlElement.getAttribute('class')

    // Click to toggle
    await themeButton.click()
    await page.waitForTimeout(300)

    // Class should have changed
    const newClass = await htmlElement.getAttribute('class')
    expect(newClass).not.toBe(initialClass)
  })

  test('should display header with navigation', async ({ page }) => {
    await expect(page.getByRole('banner')).toBeVisible()
    await expect(page.getByRole('banner').getByRole('link', { name: 'Qoi_tec' })).toBeVisible()
    await expect(page.getByRole('banner').getByRole('link', { name: 'Work' })).toBeVisible()
    await expect(page.getByRole('banner').getByRole('link', { name: 'About' })).toBeVisible()
    await expect(page.getByRole('banner').getByRole('link', { name: 'Contact' })).toBeVisible()
  })

  test('should display footer', async ({ page }) => {
    await page.getByRole('contentinfo').scrollIntoViewIfNeeded()
    await expect(page.getByRole('contentinfo')).toBeVisible()
    await expect(page.getByRole('contentinfo').getByRole('link', { name: 'Qoi_tec' })).toBeVisible()
  })
})
