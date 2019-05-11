const Footer = () => (
  <div className="container">
    <p>If you're interesting to work with me or just want to say me "Hello" drop me a message to <a href="mailto:ademir.besirovic1996@gmail.com">ademir.besirovic1996@gmail.com</a></p>
    <p>Need more information about me, my working experience or skills ... <a href="./static/ademir-besirovic.pdf" target="_blank">download my CV</a></p>
    <style jsx>{`
      div {
        border-top: 1px solid #444;
        margin-top: 150px;
        padding-top: 50px;
        padding-bottom: 50px;
      }

      @media (max-width: 768px) {
        div {
          margin-top: 50px;
        }

        p {
          margin-bottom: 25px;
        }
      }
    `}</style>
  </div>
);

export default Footer;
