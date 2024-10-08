module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/PageOrders",
        permanent: true,
      },
    ];
  },
};
