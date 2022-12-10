import React from "react";
import { Display, Image } from "./GalleryElements";
// import Masonry from 'react-masonry-component';
// import Masonry from 'react-masonry-component';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { artworks: [] };
  }

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    fetch('https://metmuseum.github.io/api/artworks')
      .then(res => res.json())
      .then(artworks => this.setState({ artworks }));
  }

  render() {
    return (
      <Display>
        {this.state.artworks.map(artwork => (
          <Image
            key={artwork.id}
            src={artwork.primaryImage}
          />
        ))}
      </Display>
      // <>
      // <Masonry>
      //   {this.state.artworks.map(artwork => {
      //     return(<Image
      //       key={artwork.id}
      //       src={artwork.primaryImage}
      //     />)
      //     })}
      // </Masonry>
      // </>
      
    );
  }
}
// return (
  //     <>
  //     <Display>
  //       {data.map((item, index)=>{
  //         return(
  //             <Image key={index} src={ArtData} />
  //         )
  //       })}
  //     </Display>
  //     </>
  //   );
export default Gallery;
// /* gallery source code: https://github.com/webstylepress/React-JS-Image-Gallery */

// import piet_mondrian from '../../assets/images/publicDomainArtworks/composition_with_red_blue_and_yellow_piet_mondrian.jpg';
// import edvard_munch from '../../assets/images/publicDomainArtworks/despair_edvard_munch.jpg';
// import ding_fuzhi from '../../assets/images/publicDomainArtworks/dish_of_iced_summer_fruit_ding_fuzhi.jpg';
// import alphonse_mucha from '../../assets/images/publicDomainArtworks/fchampenois_imprimeur_editeur_alphonse_mucha.jpg';
// import johannes_vermeer from '../../assets/images/publicDomainArtworks/girl_with_a_pearl_earring_johannes_vermeer.jpg';
// import zhang_ruoai from '../../assets/images/publicDomainArtworks/gossiping_sparrows_zhang_ruoai.jpg';
// import ju_lian from '../../assets/images/publicDomainArtworks/insects_and_flowers_ju_lian.jpg';
// import wassily_kandinsky from '../../assets/images/publicDomainArtworks/jaune_rouge_bleu_wassily_kandinsky.jpg';
// import leornardo_da_vinci from '../../assets/images/publicDomainArtworks/lady_with_an_ermine_leonardo_da_vinci.jpg';
// import gustav_klimt from '../../assets/images/publicDomainArtworks/mada_primavesi_gustav_klimt.jpg';
// import claude_monet from '../../assets/images/publicDomainArtworks/madame_monet_and_her_son_claude_monet.jpg';
// import john_singer_sargent from '../../assets/images/publicDomainArtworks/madame_x_john_singer_sargent.jpg';
// import georges_seurat from '../../assets/images/publicDomainArtworks/man_leaning_on_a_parapet_georges_seurat.jpg';
// import paul_cezanne from '../../assets/images/publicDomainArtworks/mont_sainte_victoire_paul_cezanne.jpg';
// import katsushika_hokusai from '../../assets/images/publicDomainArtworks/part_of_the_series_thirty_six_views_of_mount_fuji_no_33_katsushika_hokusai.jpg';
// import julie_de_graag from '../../assets/images/publicDomainArtworks/sitting_cat_julie_de_graag.jpg';
// import paul_klee from '../../assets/images/publicDomainArtworks/the_harbinger_of_autumn_paul_klee.jpg';
// import abraham_mignon from '../../assets/images/publicDomainArtworks/the_overturned_bouquet_abraham_mignon.jpg';
// import vincent_van_gogh from '../../assets/images/publicDomainArtworks/the_postman_vincent_van_gogh.jpg';
// import edgar_degas from '../../assets/images/publicDomainArtworks/the_rehearsal_onstage_edgar_degas.jpg';
// import ArtData from "./ArtData";
// const Gallery = () => {
//   let data = [
//     {
//       id: 1,
//       imgSrc: piet_mondrian,
//     },
//     {
//       id: 2,
//       imgSrc: edvard_munch,
//     },
//     {
//       id: 3,
//       imgSrc: ding_fuzhi,
//     },
//     {
//       id: 4,
//       imgSrc: alphonse_mucha,
//     },
//     {
//       id: 5,
//       imgSrc: johannes_vermeer,
//     },
//     {
//       id: 6,
//       imgSrc: zhang_ruoai,
//     },
//     {
//       id: 7,
//       imgSrc: ju_lian,
//     },
//     {
//       id: 8,
//       imgSrc: wassily_kandinsky,
//     },
//     {
//       id: 9,
//       imgSrc: leornardo_da_vinci,
//     },
//     {
//       id: 10,
//       imgSrc: gustav_klimt,
//     },
//     {
//       id: 11,
//       imgSrc: claude_monet,
//     },
//     {
//       id: 12,
//       imgSrc: john_singer_sargent,
//     },
//     {
//       id: 13,
//       imgSrc: georges_seurat,
//     },
//     {
//       id: 14,
//       imgSrc: paul_cezanne,
//     },
//     {
//       id: 15,
//       imgSrc: katsushika_hokusai,
//     },
//     {
//       id: 16,
//       imgSrc: julie_de_graag,
//     },
//     {
//       id: 17,
//       imgSrc: paul_klee,
//     },
//     {
//       id: 18,
//       imgSrc: abraham_mignon,
//     },
//     {
//       id: 19,
//       imgSrc: vincent_van_gogh,
//     },
//     {
//       id: 20,
//       imgSrc: edgar_degas,
//     }
//   ]

//   return (
//     <>
//     <Display>
//       {data.map((item, index)=>{
//         return(
//             <Image key={index} src={ArtData} />
//         )
//       })}
//     </Display>
//     </>
//   );
// }

