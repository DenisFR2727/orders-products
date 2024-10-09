module.exports = {
  async redirects() {
    return [
      {
        source: "/PageOrder",
        destination: "/PageOrders",
        permanent: true,
      },
    ];
  },
};
