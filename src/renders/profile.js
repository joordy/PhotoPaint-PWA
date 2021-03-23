// Profile route function
const profile = async (req, res) => {
  try {
    res.render('profile', {
      pageInfo: {
        PageTitle: 'Profile | PhotoPaint',
      },
    })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { profile }
