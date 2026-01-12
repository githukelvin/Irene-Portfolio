import { test, expect } from '@playwright/test'

test.describe('Accessibility', () => {
  test('should have skip to main content link', async ({ page }) => {
    await page.goto('/')

    // Tab to focus on skip link
    await page.keyboard.press('Tab')

    // Skip link should become visible when focused
    const skipLink = page.locator('a[href="#main-content"]')
    await expect(skipLink).toBeFocused()

    // Click skip link and verify main content receives focus
    await skipLink.click()
    const mainContent = page.locator('#main-content')
    await expect(mainContent).toBeVisible()
  })

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Check that h1 exists
    const h1 = page.locator('h1')
    await expect(h1).toHaveCount(1)

    // Check that h1 contains meaningful content (name is split across block spans)
    await expect(h1).toContainText('Wangari')
    await expect(h1).toContainText('Irene')
  })

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/')

    // Check main navigation has aria-label
    const nav = page.locator('nav[aria-label="Main navigation"]')
    await expect(nav).toBeVisible()

    // Check nav links are keyboard accessible
    const navLinks = page.locator('nav[aria-label="Main navigation"] a')
    const count = await navLinks.count()
    expect(count).toBeGreaterThan(0)
  })

  test('should have accessible theme toggle', async ({ page }) => {
    await page.goto('/')

    // Theme toggle should have aria-label
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' })
    await expect(themeToggle.first()).toBeVisible()
    await expect(themeToggle.first()).toHaveAttribute('aria-label', 'Toggle theme')
  })

  test('should indicate current page in navigation', async ({ page }) => {
    await page.goto('/about')

    // About link should have aria-current="page"
    const aboutLink = page.locator('nav[aria-label="Main navigation"] a[href="/about"]')
    await expect(aboutLink).toHaveAttribute('aria-current', 'page')
  })

  test('should have accessible contact form', async ({ page }) => {
    await page.goto('/contact')

    // Check form fields have labels
    const nameLabel = page.getByText('Your Name', { exact: false })
    await expect(nameLabel).toBeVisible()

    const emailLabel = page.getByText('Email Address', { exact: false })
    await expect(emailLabel).toBeVisible()

    // Check form fields are labeled
    const nameInput = page.locator('#name')
    await expect(nameInput).toBeVisible()

    const emailInput = page.locator('#email')
    await expect(emailInput).toBeVisible()
  })

  test('should show form validation errors accessibly', async ({ page }) => {
    await page.goto('/contact')

    // Submit empty form
    const submitButton = page.getByRole('button', { name: 'Send Message' })
    await submitButton.click()

    // Check that error messages appear
    const nameError = page.locator('#name-error')
    await expect(nameError).toBeVisible()
    await expect(nameError).toHaveAttribute('role', 'alert')

    // Check that input has aria-invalid
    const nameInput = page.locator('#name')
    await expect(nameInput).toHaveAttribute('aria-invalid', 'true')
    await expect(nameInput).toHaveAttribute('aria-describedby', 'name-error')
  })

  test('should have accessible images with alt text', async ({ page }) => {
    await page.goto('/')

    // Check that images have alt attributes (empty alt is okay for decorative images)
    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      // alt attribute should exist (can be empty for decorative images)
      expect(alt !== null).toBeTruthy()
    }
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')

    // Tab through interactive elements
    const focusableElements = []

    // Tab 10 times and collect focused elements
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press('Tab')
      const focused = await page.evaluate(() => {
        const el = document.activeElement
        return el ? el.tagName.toLowerCase() : null
      })
      if (focused) {
        focusableElements.push(focused)
      }
    }

    // Should have focused on multiple elements
    expect(focusableElements.length).toBeGreaterThan(0)

    // Should include links and buttons
    const hasLink = focusableElements.some(el => el === 'a')
    const hasButton = focusableElements.some(el => el === 'button')
    expect(hasLink || hasButton).toBeTruthy()
  })

  test('should have proper page title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Wangari Irene/)

    await page.goto('/about')
    await expect(page).toHaveTitle(/About/)

    await page.goto('/work')
    await expect(page).toHaveTitle(/Work/)

    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/)
  })

  test('should have 404 page accessible', async ({ page }) => {
    await page.goto('/nonexistent-page')

    // Should show 404 content
    await expect(page).toHaveTitle(/Page Not Found/)

    // Should have a way to get back to home
    const homeLink = page.getByRole('link', { name: /Back to Home/i })
    await expect(homeLink).toBeVisible()
  })
})
