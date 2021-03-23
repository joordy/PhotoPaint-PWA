// Error route function
const offline = async (req, res) => {
  try {
    res.render('offline', {
      pageInfo: {
        PageTitle: 'Offline | PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { offline }
