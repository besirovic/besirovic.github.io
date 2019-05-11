const Social = () => (
  <div style={{ marginTop: 40 }}>
    <p>Connect with me on:</p>
    <a href="https://github.com/besirovic" target="_blank">GitHub</a><span>,</span>
    <a href="https://twitter.com/ademirbesirovic" target="_blank">Twitter</a><span>,</span>
    <a href="https://www.linkedin.com/in/ademir-besirovic/" target="_blank">LinkedIn</a><span>,</span>
    <a href="https://www.instagram.com/ademirbesirovic/" target="_blank">Instagram</a>
  
    <style jsx>{`
      a {
        margin-left: 10px;
      }

      @media (max-width: 768px) {
        a {
          display: block;
          margin-left: 0;
          margin-top: 20px;
        }

        span {
          display: none;
        }
      } 
    `}</style>
  </div>
);

export default Social;