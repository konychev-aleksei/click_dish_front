import { test, expect, devices } from '@playwright/test';

const storyUrl = (id: string) => `http://localhost:6006/?path=/story/${id}`;

test.describe('TextField visual regression across modern devices', () => {
  const storyId = 'ui-textfield--default';

  // iPhone 14 Pro
  test.use({ viewport: devices['iPhone 14 Pro'].viewport });
  test('TextField on iPhone 14 Pro', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const input = frame.getByRole('textbox');
    await expect(input).toBeVisible({ timeout: 10000 });
    expect(await input.screenshot()).toMatchSnapshot(
      'textfield-iphone14pro.png'
    );
  });

  // Pixel 7
  test.use({ viewport: { width: 412, height: 915 } }); // Pixel 7
  test('TextField on Pixel 7', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const input = frame.getByRole('textbox');
    await expect(input).toBeVisible({ timeout: 10000 });
    expect(await input.screenshot()).toMatchSnapshot('textfield-pixel7.png');
  });

  // Wide Desktop (Full HD)
  test.use({ viewport: { width: 1920, height: 1080 } });
  test('TextField on wide desktop', async ({ page }) => {
    await page.goto(storyUrl(storyId));
    const frame = page.frameLocator('iframe');
    const input = frame.getByRole('textbox');
    await expect(input).toBeVisible({ timeout: 10000 });
    expect(await input.screenshot()).toMatchSnapshot(
      'textfield-desktop-wide.png'
    );
  });
});
