import { ThemeToggle } from "./ThemeToggle";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-end p-4 space-x-2">
      <LanguageSwitcher />
      <ThemeToggle />
    </header>
  );
};