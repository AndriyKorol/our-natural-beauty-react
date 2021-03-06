import React from "react";
import PropTypes from 'prop-types';

import Product from "../components/Product";
import EmptyPage from "../components/EmptyPage";
import Loading from '../components/Loading';

function Products({ products, match, searchedMed, importProducts, getProduct }) {
    importProducts();

    let medications = match.params.category
        ? products.filter(medication => {
            return medication.category === match.params.category;
        })
        : products;

    let searchMeds = medications.filter(med => {
        if (~med.slug.indexOf(searchedMed.toLowerCase())) {
            return med;
        }
    });

    return !medications.length ? (
        <Loading />
    ) : !searchMeds.length ? (
        <EmptyPage content="Nothing was found" />
    ) : (
        <div className="row">
            {searchMeds.map((product, index) => {
                return (
                    <div key={index} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <Product medication={product} getItem={getProduct} />
                    </div>
                );
            })}
        </div>
    );
}

Products.propTypes = {
  products: PropTypes.array,
  searchedMed: PropTypes.string,
  importProducts: PropTypes.func,
  getProduct: PropTypes.func,
  match: PropTypes.object
};

export default Products;
