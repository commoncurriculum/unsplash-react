import propTypes from "prop-types"
import React from "react"
const { shape, string, func } = propTypes

export default class InsertIntoApplicationUploader extends React.Component {
  static propTypes = {
    unsplashPhoto: shape({
      id: string.isRequired,
      links: shape({
        download: string.isRequired,
        download_location: string.isRequired,
      }).isRequired,
    }),
    downloadPhoto: func.isRequired,
    onFinishedUploading: func.isRequired,
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const prevPhoto = this.props.unsplashPhoto
    const nextPhoto = nextProps.unsplashPhoto
    if ((prevPhoto && prevPhoto.id) === (nextPhoto && nextPhoto.id)) return

    nextProps
      .downloadPhoto(nextPhoto)
      .then(r => r.url)
      .then(this.props.onFinishedUploading)
  }

  render() {
    return null
  }
}
