const Iam = () => (
  <div style={{ maxWidth: 1200 }}>
    <p>Hello, I'm</p>
    <h1>Ademir Beširović</h1>
    <p>22 y/o, self-taught,full-stack software developer who loves to work with JavaScript/TypeScript, React, Node, GoLang, GraphQL and any other modern technology.</p>
    <style jsx>{`
      h1 {
        color: #50e3c2;
        font-size: 48px;
        margin-top: 10px;
      }

      @media (max-width: 768px) {
        h1 {
          margin-bottom: 40px;
        }
      }
    `}</style>
  </div>
);

export default Iam;