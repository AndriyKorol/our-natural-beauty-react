import React from 'react';

import products from '../data/products.json'

function Medication({ match }) {
    let medication = products.find((med) => {
        return med.slug === match.params.medication
    });

    return (
        <main className="product-page">
            <img src="/img/pills.png" alt="medication"/>

            <h2>{medication.title}</h2>
            <hr/>
            <h4>{medication.ingredient}</h4>
            <div className="medication-description">
                <p>Raising say express had chiefly detract demands she. Quiet led own cause three him. Front no party young abode
                    state up. Saved he do fruit woody of to. Met defective are allowance two perceived listening consulted contained.
                    It chicken oh colonel pressed excited suppose to shortly. He improve started no we manners however effects.
                    Prospect humoured mistress to by proposal marianne attended. Simplicity the far admiration preference everything.
                    Up help home head spot an he room in.
                </p>

                <p>John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade
                    guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no.
                    Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle
                    middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.
                </p>

                <p>Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening.
                    Thing do taste on we manor. Him had wound use found hoped. Of distrusts immediate enjoyment curiosity do.
                    Marianne numerous saw thoughts the humoured.
                </p>
            </div>
        </main>
    )
}

export default Medication