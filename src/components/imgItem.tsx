import { Img } from '../types';

type ImgItemProps = {
    item: Img; //Img item
}

const ImgItem = ({ item }: ImgItemProps) => {
    if (!item) {
        return null
    }
    return <div className="listRow" key={item.id}>
        <img className='imgContainer' src={item.img_src} />
    </div>

}

export default ImgItem;