import setTitle from "../../helper/title/title"

import css from './.module.scss'

import _card from "./card/card"

export default function Catalogue() {
    setTitle("Medicine")
    return (
        <div className={css.cont}>
            <div>
                <h5>Categories</h5>
                <ul>
                    <li><a href="#antacids">Antacids</a></li>
                    <li><a href="#antacids">Antidepresants</a></li>
                    <li><a href="#antacids">Antibiotics</a></li>
                    <li><a href="#antacids">Decongestants</a></li>
                    <li><a href="#antacids">Hormones</a></li>
                    <li><a href="#antacids">Laxatives</a></li>
                    <li><a href="#antacids">Vitamins</a></li>
                </ul>
            </div>
            <div>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
                <_card imgPath="/assets/obat.png" title="Gaviscon Mint Liquid Mint Flavour" price={69000}/>
            </div>
        </div>
    )
}