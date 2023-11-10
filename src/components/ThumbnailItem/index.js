// Write your code here.
import './index.css'

const ThumnbnailItem = props => {
  const {thumbnailImage, onClickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailImage

  const onClickChangeImg = () => {
    onClickImage(id)
  }

  const activeThumbnail = isActive ? 'active-image' : ''

  return (
    <li className="list-item">
      <button type="button" className="img-button" onClick={onClickChangeImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${activeThumbnail}`}
        />
      </button>
    </li>
  )
}

export default ThumnbnailItem
