// Error route function
const error = async (req, res) => {
  try {
    res
      .status(404)
      .render('error', { PageTitle: 'Page Not Found | PhotoPaint' })
  } catch (err) {
    console.log(err)
  }
}

// Export route
module.exports = { error }
