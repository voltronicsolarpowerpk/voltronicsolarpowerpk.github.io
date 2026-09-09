import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaBox,
  FaDownload,
} from "react-icons/fa6";

export default function Documents() {
  const [treeData, setTreeData] = useState([]);
  const [expandedBrands, setExpandedBrands] = useState({});
  const [expandedProducts, setExpandedProducts] = useState({});

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}documents/documents.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load documents.json");
        return res.json();
      })
      .then(setTreeData)
      .catch(console.error);
  }, []);

  const toggleBrand = (id) =>
    setExpandedBrands((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleProduct = (id) =>
    setExpandedProducts((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="documents" className="py-4 bg-background">
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto">
          <p className="text-primary-dark font-semibold tracking-wide">Links</p>
          <h2 className="mt-3 text-text text-3xl sm:text-4xl font-bold leading-tight">
            Important Documents & Specs
          </h2>
        </div>

        {/* Tree View Container */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm mt-12 p-6 space-y-4">
          {treeData.map((brand) => (
            <div
              key={brand.id}
              className="border-b border-slate-100 last:border-b-0 pb-3"
            >
              {/* BRAND LEVEL */}
              <button
                type="button"
                onClick={() => toggleBrand(brand.id)}
                className="flex items-center gap-3 w-full text-left font-semibold text-lg text-slate-800 hover:text-blue-600 py-2 transition-colors cursor-pointer"
              >
                {expandedBrands[brand.id] ? (
                  <FaChevronDown className="text-sm text-slate-500" />
                ) : (
                  <FaChevronRight className="text-sm text-slate-500" />
                )}
                <FaFolder className="text-amber-500 text-xl" />
                <span>{brand.brand}</span>
              </button>

              {/* PRODUCT LEVEL */}
              {expandedBrands[brand.id] && (
                <div className="ml-6 mt-2 space-y-2 border-l-2 border-slate-200 pl-4">
                  {brand.products.map((product) => (
                    <div key={product.id}>
                      <button
                        type="button"
                        onClick={() => toggleProduct(product.id)}
                        className="flex items-center gap-3 w-full text-left font-medium text-slate-700 hover:text-blue-600 py-1.5 transition-colors cursor-pointer"
                      >
                        {expandedProducts[product.id] ? (
                          <FaChevronDown className="text-xs text-slate-400" />
                        ) : (
                          <FaChevronRight className="text-xs text-slate-400" />
                        )}
                        <FaBox className="text-blue-500" />
                        <span>{product.name}</span>
                      </button>

                      {/* DOCUMENT LEVEL */}
                      {expandedProducts[product.id] && (
                        <div className="ml-6 mt-2 space-y-2 border-l-2 border-slate-200 pl-4">
                          {product.documents.map((doc) => (
                            <div
                              key={doc.id}
                              className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100 hover:bg-slate-100 transition-colors"
                            >
                              <span className="text-sm text-slate-700 font-medium">
                                {doc.title}
                              </span>
                              <a
                                href={`/documents/${doc.fileName}`}
                                download={doc.fileName}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-800 font-semibold bg-white border border-blue-200 px-3 py-1.5 rounded-md shadow-xs transition-all"
                              >
                                <FaDownload /> Download
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
