import { test, expect, devices } from '@playwright/test';

const storyUrl = (id: string) => `http://localhost:6006/?path=/story/${id}`;

test.describe('Button visual regression across modern devices', () => {
  const storyId = 'ui-button--primary';

  // iPhone 14 Pro
  test.use({ viewport: devices['iPhone 14 Pro'].viewport });
  test('primary button on iPhone 14 Pro', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const button = frame.getByTestId('button');
    await expect(button).toBeVisible({ timeout: 10000 });
    expect(await button.screenshot()).toMatchSnapshot('button-iphone14pro.png');
  });

  // Pixel 7
  test.use({ viewport: { width: 412, height: 915 } }); // Pixel 7
  test('primary button on Pixel 7', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const button = frame.getByTestId('button');
    await expect(button).toBeVisible({ timeout: 10000 });
    expect(await button.screenshot()).toMatchSnapshot('button-pixel7.png');
  });

  // Wide Desktop (Full HD)
  test.use({ viewport: { width: 1920, height: 1080 } });
  test('primary button on wide desktop', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const button = frame.getByTestId('button');
    await expect(button).toBeVisible({ timeout: 10000 });
    expect(await button.screenshot()).toMatchSnapshot(
      'button-desktop-wide.png'
    );
  });
});
