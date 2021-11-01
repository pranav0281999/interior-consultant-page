module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "interior-consultant",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['PT Serif', 'Montserrat', "Poppins", "Material Icons"]
        }
      }
    }
  ],
};
