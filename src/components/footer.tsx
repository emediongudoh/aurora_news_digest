export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-muted-foreground p-4 text-center text-sm">
      &#169; {currentYear} AuroraNews
    </footer>
  );
};
