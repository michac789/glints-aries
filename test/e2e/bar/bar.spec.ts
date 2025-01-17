import { test, expect, Page } from '@playwright/test';
import { StoryBookPage } from '../storybookPage';

const getPage = (page: Page) =>
  new StoryBookPage(page, '?path=/story/next-bar--interactive');

test('Bar', async ({ page }) => {
  const barPage = getPage(page);
  await barPage.goto();
  await expect(barPage.canvas).toHaveScreenshot('bar.png');
});

test('Bar - without subheading', async ({ page }) => {
  const barPage = getPage(page);
  await barPage.goto('args=subheading:!null');
  await expect(barPage.canvas).toHaveScreenshot('bar-no-subheading.png');
});

test('Bar - position top', async ({ page }) => {
  const barPage = getPage(page);
  await barPage.goto('args=position:top');
  await expect(barPage.canvas).toHaveScreenshot('bar-actions-position-top.png');
});

test('Bar - position bottom', async ({ page }) => {
  const barPage = getPage(page);
  await barPage.goto('args=position:bottom');
  await expect(barPage.canvas).toHaveScreenshot(
    'bar-actions-position-bottom.png'
  );
});

test('Bar - primary action only', async ({ page }) => {
  const barPage = new StoryBookPage(
    page,
    '?path=/story/next-bar--primary-action-only'
  );
  await barPage.goto();
  await expect(barPage.canvas).toHaveScreenshot('bar-primary-action-only.png');
});

test('Bar - Custom Heading and Sub Heading', async ({ page }) => {
  const barPage = new StoryBookPage(
    page,
    '?path=/story/next-bar--custom-heading'
  );
  await barPage.goto();
  await expect(barPage.canvas).toHaveScreenshot('bar-custom-heading.png');
});
