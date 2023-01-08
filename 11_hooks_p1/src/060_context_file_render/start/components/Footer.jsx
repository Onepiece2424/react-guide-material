import { useUpdateTheme } from "../context/ThemeContext"

const Footer = () => {
  // eslint-disable-next-line 
  const setTheme = useUpdateTheme();
  console.log('footer')

  return (
    <footer>
      <div>フッター</div>
    </footer>
  );
};

export default Footer;
