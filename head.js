(() => {
  const root = document.documentElement;

  try {
    const storedTheme = localStorage.getItem("theme");
    const storedLanguage = localStorage.getItem("language");

    if (storedTheme === "light" || storedTheme === "dark") {
      root.dataset.theme = storedTheme;
    }

    if (storedLanguage === "zh" || storedLanguage === "en") {
      root.dataset.language = storedLanguage;
      root.lang = storedLanguage === "zh" ? "zh-CN" : "en";
    }
  } catch (error) {
    console.warn("Preferences could not be restored.", error);
  }
})();
