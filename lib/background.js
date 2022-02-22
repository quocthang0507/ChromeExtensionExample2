let color = '#3aa757';

chrome.runtime.onInstalled.addListener(function () {
  // this runs ONE TIME ONLY (unless the user reinstalls your extension)
  console.log("The Extension is installed!");
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});