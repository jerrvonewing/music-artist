import React from 'react'
import Card from './Card'
import { CCarousel, CCarouselItem, CImage, CCarouselCaption,} from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'

function NewsLetter() {
const ReactImg = 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/23/a9/0523a944-49a4-49b3-a077-58efa2ae86f9/artwork.jpg/1200x1200bb.jpg'
const VueImg = 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/23/a9/0523a944-49a4-49b3-a077-58efa2ae86f9/artwork.jpg/1200x1200bb.jpg'
const AngularImg = 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/05/23/a9/0523a944-49a4-49b3-a077-58efa2ae86f9/artwork.jpg/1200x1200bb.jpg'

  return (
    <CCarousel controls indicators dark>
    <CCarouselItem>
        <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
        <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
        </CCarouselCaption>
    </CCarouselItem>
</CCarousel>
  )
}

export default NewsLetter