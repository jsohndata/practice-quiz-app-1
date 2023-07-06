const fullYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer>
      <p>&copy; {fullYear}</p>
    </footer>
  );
};
