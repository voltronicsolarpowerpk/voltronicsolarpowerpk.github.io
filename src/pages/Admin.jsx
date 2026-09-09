import { useState, useEffect } from "react";
import {
  FaChevronRight,
  FaChevronDown,
  FaFolder,
  FaBox,
  FaFilePdf,
  FaTrash,
  FaPen,
  FaPlus,
  FaFileExport,
  FaGripVertical,
} from "react-icons/fa6";

export default function Admin({ onBack }) {
  const [treeData, setTreeData] = useState([]);
  const [expandedBrands, setExpandedBrands] = useState({});
  const [expandedProducts, setExpandedProducts] = useState({});

  // Inline Editing States
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Drag State
  const [dragInfo, setDragInfo] = useState(null);

  // 1. Load data from public directory using Vite BASE_URL
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}documents/documents.json`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load documents.json");
        return res.json();
      })
      .then((data) => {
        setTreeData(data);
        // Expand all top-level items by default in Admin
        const initialBrands = {};
        data.forEach((b) => (initialBrands[b.id] = true));
        setExpandedBrands(initialBrands);
      })
      .catch(console.error);
  }, []);

  const toggleBrand = (id) =>
    setExpandedBrands((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleProduct = (id) =>
    setExpandedProducts((prev) => ({ ...prev, [id]: !prev[id] }));

  // --- ADD OPERATIONS ---
  const addBrand = () => {
    const newBrand = {
      id: `brand-${Date.now()}`,
      brand: "New Brand",
      products: [],
    };
    setTreeData([...treeData, newBrand]);
  };

  const addProduct = (brandId) => {
    const newProduct = {
      id: `prod-${Date.now()}`,
      name: "New Product / Model",
      documents: [],
    };
    setTreeData((prev) =>
      prev.map((b) =>
        b.id === brandId ? { ...b, products: [...b.products, newProduct] } : b,
      ),
    );
    setExpandedBrands((prev) => ({ ...prev, [brandId]: true }));
  };

  const addDocument = (brandId, productId) => {
    const newDoc = {
      id: `doc-${Date.now()}`,
      title: "New Specification Document",
      fileName: "document.pdf",
    };
    setTreeData((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        return {
          ...b,
          products: b.products.map((p) =>
            p.id === productId
              ? { ...p, documents: [...p.documents, newDoc] }
              : p,
          ),
        };
      }),
    );
    setExpandedProducts((prev) => ({ ...prev, [productId]: true }));
  };

  // --- DELETE OPERATIONS ---
  const deleteBrand = (brandId) => {
    setTreeData((prev) => prev.filter((b) => b.id !== brandId));
  };

  const deleteProduct = (brandId, productId) => {
    setTreeData((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        return { ...b, products: b.products.filter((p) => p.id !== productId) };
      }),
    );
  };

  const deleteDocument = (brandId, productId, docId) => {
    setTreeData((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        return {
          ...b,
          products: b.products.map((p) => {
            if (p.id !== productId) return p;
            return {
              ...p,
              documents: p.documents.filter((d) => d.id !== docId),
            };
          }),
        };
      }),
    );
  };

  // --- EDIT / RENAME OPERATIONS ---
  const startRename = (id, currentVal) => {
    setEditingId(id);
    setEditValue(currentVal);
  };

  const saveRename = (type, brandId, productId, docId) => {
    setTreeData((prev) =>
      prev.map((b) => {
        if (type === "brand" && b.id === brandId) {
          return { ...b, brand: editValue };
        }
        if (b.id === brandId && b.products) {
          return {
            ...b,
            products: b.products.map((p) => {
              if (type === "product" && p.id === productId) {
                return { ...p, name: editValue };
              }
              if (p.id === productId && p.documents) {
                return {
                  ...p,
                  documents: p.documents.map((d) => {
                    if (type === "document" && d.id === docId) {
                      return { ...d, title: editValue };
                    }
                    return d;
                  }),
                };
              }
              return p;
            }),
          };
        }
        return b;
      }),
    );
    setEditingId(null);
  };

  // --- FILE ATTACHMENT ---
  const handleFileUpload = (e, brandId, productId, docId) => {
    const file = e.target.files[0];
    if (!file) return;

    setTreeData((prev) =>
      prev.map((b) => {
        if (b.id !== brandId) return b;
        return {
          ...b,
          products: b.products.map((p) => {
            if (p.id !== productId) return p;
            return {
              ...p,
              documents: p.documents.map((d) => {
                if (d.id !== docId) return d;
                return { ...d, fileName: file.name };
              }),
            };
          }),
        };
      }),
    );

    alert(
      `Attached "${file.name}". Copy this file into /public/documents/ before uploading.`,
    );
  };

  // --- REORDERING (DRAG & DROP) ---
  const handleDragStart = (
    e,
    type,
    index,
    parentBrandId = null,
    parentProdId = null,
  ) => {
    e.stopPropagation();
    setDragInfo({ type, index, parentBrandId, parentProdId });
  };

  const handleDrop = (
    e,
    type,
    targetIndex,
    targetBrandId = null,
    targetProdId = null,
  ) => {
    e.stopPropagation();
    if (!dragInfo || dragInfo.type !== type) return;

    // Brand Level Drag
    if (type === "brand") {
      const items = [...treeData];
      const [dragged] = items.splice(dragInfo.index, 1);
      items.splice(targetIndex, 0, dragged);
      setTreeData(items);
    }

    // Product Level Drag
    if (type === "product" && dragInfo.parentBrandId === targetBrandId) {
      setTreeData((prev) =>
        prev.map((b) => {
          if (b.id !== targetBrandId) return b;
          const prods = [...b.products];
          const [dragged] = prods.splice(dragInfo.index, 1);
          prods.splice(targetIndex, 0, dragged);
          return { ...b, products: prods };
        }),
      );
    }

    // Document Level Drag
    if (
      type === "document" &&
      dragInfo.parentBrandId === targetBrandId &&
      dragInfo.parentProdId === targetProdId
    ) {
      setTreeData((prev) =>
        prev.map((b) => {
          if (b.id !== targetBrandId) return b;
          return {
            ...b,
            products: b.products.map((p) => {
              if (p.id !== targetProdId) return p;
              const docs = [...p.documents];
              const [dragged] = docs.splice(dragInfo.index, 1);
              docs.splice(targetIndex, 0, dragged);
              return { ...p, documents: docs };
            }),
          };
        }),
      );
    }

    setDragInfo(null);
  };

  // --- EXPORT FUNCTION ---
  const handleExportJSON = () => {
    const jsonString = JSON.stringify(treeData, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "documents.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 bg-background min-h-screen">
      <div className="container-custom max-w-5xl mx-auto px-4">
        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div>
            {onBack && (
              <button
                onClick={onBack}
                className="text-sm font-semibold text-slate-500 hover:text-slate-800 mb-2 block"
              >
                ← Back to Main Site
              </button>
            )}
            <h1 className="text-2xl font-bold text-slate-800">
              Documents Manager (Admin)
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Add, edit, reorder, attach PDFs, and export your updated tree.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={addBrand}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-lg text-sm font-semibold border border-blue-200 transition-colors"
            >
              <FaPlus /> Add Brand
            </button>
            <button
              onClick={handleExportJSON}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors shadow-xs"
            >
              <FaFileExport /> Export JSON
            </button>
          </div>
        </div>

        {/* Tree Admin Workspace */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-6 space-y-4">
          {treeData.map((brand, bIdx) => (
            <div
              key={brand.id}
              draggable
              onDragStart={(e) => handleDragStart(e, "brand", bIdx)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, "brand", bIdx)}
              className="border border-slate-200 rounded-lg p-4 bg-slate-50/50"
            >
              {/* BRAND ROW */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1">
                  <FaGripVertical className="text-slate-400 cursor-grab hover:text-slate-600" />
                  <button
                    type="button"
                    onClick={() => toggleBrand(brand.id)}
                    className="p-1 text-slate-500 hover:text-slate-700"
                  >
                    {expandedBrands[brand.id] ? (
                      <FaChevronDown />
                    ) : (
                      <FaChevronRight />
                    )}
                  </button>
                  <FaFolder className="text-amber-500 text-xl" />

                  {editingId === brand.id ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                        className="border border-blue-400 rounded px-2 py-1 text-sm bg-white"
                      />
                      <button
                        onClick={() => saveRename("brand", brand.id)}
                        className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <span className="font-bold text-slate-800 text-lg">
                      {brand.brand}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => startRename(brand.id, brand.brand)}
                    className="p-1.5 text-slate-400 hover:text-blue-600 transition-colors"
                    title="Rename Brand"
                  >
                    <FaPen size={14} />
                  </button>
                  <button
                    onClick={() => addProduct(brand.id)}
                    className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold bg-white border border-blue-200 px-2.5 py-1 rounded hover:bg-blue-50"
                  >
                    <FaPlus size={10} /> Product
                  </button>
                  <button
                    onClick={() => deleteBrand(brand.id)}
                    className="p-1.5 text-slate-400 hover:text-red-600 transition-colors"
                    title="Delete Brand"
                  >
                    <FaTrash size={14} />
                  </button>
                </div>
              </div>

              {/* PRODUCTS TREE */}
              {expandedBrands[brand.id] && (
                <div className="ml-6 mt-4 space-y-3 border-l-2 border-slate-200 pl-4">
                  {brand.products?.map((product, pIdx) => (
                    <div
                      key={product.id}
                      draggable
                      onDragStart={(e) =>
                        handleDragStart(e, "product", pIdx, brand.id)
                      }
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => handleDrop(e, "product", pIdx, brand.id)}
                      className="border border-slate-200 rounded-lg p-3 bg-white"
                    >
                      {/* PRODUCT ROW */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3 flex-1">
                          <FaGripVertical className="text-slate-300 cursor-grab hover:text-slate-500" />
                          <button
                            type="button"
                            onClick={() => toggleProduct(product.id)}
                            className="p-1 text-slate-400 hover:text-slate-600"
                          >
                            {expandedProducts[product.id] ? (
                              <FaChevronDown className="text-xs" />
                            ) : (
                              <FaChevronRight className="text-xs" />
                            )}
                          </button>
                          <FaBox className="text-blue-500" />

                          {editingId === product.id ? (
                            <div className="flex items-center gap-2">
                              <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                                className="border border-blue-400 rounded px-2 py-1 text-sm"
                              />
                              <button
                                onClick={() =>
                                  saveRename("product", brand.id, product.id)
                                }
                                className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold"
                              >
                                Save
                              </button>
                            </div>
                          ) : (
                            <span className="font-semibold text-slate-700">
                              {product.name}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              startRename(product.id, product.name)
                            }
                            className="p-1 text-slate-400 hover:text-blue-600"
                            title="Rename Product"
                          >
                            <FaPen size={12} />
                          </button>
                          <button
                            onClick={() => addDocument(brand.id, product.id)}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 font-semibold bg-slate-50 border border-slate-200 px-2 py-1 rounded hover:bg-slate-100"
                          >
                            <FaPlus size={10} /> Document
                          </button>
                          <button
                            onClick={() => deleteProduct(brand.id, product.id)}
                            className="p-1 text-slate-400 hover:text-red-600"
                            title="Delete Product"
                          >
                            <FaTrash size={12} />
                          </button>
                        </div>
                      </div>

                      {/* DOCUMENTS LIST */}
                      {expandedProducts[product.id] && (
                        <div className="ml-6 mt-3 space-y-2 border-l-2 border-slate-100 pl-3">
                          {product.documents?.map((doc, dIdx) => (
                            <div
                              key={doc.id}
                              draggable
                              onDragStart={(e) =>
                                handleDragStart(
                                  e,
                                  "document",
                                  dIdx,
                                  brand.id,
                                  product.id,
                                )
                              }
                              onDragOver={(e) => e.preventDefault()}
                              onDrop={(e) =>
                                handleDrop(
                                  e,
                                  "document",
                                  dIdx,
                                  brand.id,
                                  product.id,
                                )
                              }
                              className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-2.5 rounded border border-slate-200"
                            >
                              <div className="flex items-center gap-2 flex-1">
                                <FaGripVertical className="text-slate-300 cursor-grab hover:text-slate-500" />
                                <FaFilePdf className="text-red-500" />

                                {editingId === doc.id ? (
                                  <div className="flex items-center gap-2">
                                    <input
                                      type="text"
                                      value={editValue}
                                      onChange={(e) =>
                                        setEditValue(e.target.value)
                                      }
                                      className="border border-blue-400 rounded px-2 py-0.5 text-xs bg-white"
                                    />
                                    <button
                                      onClick={() =>
                                        saveRename(
                                          "document",
                                          brand.id,
                                          product.id,
                                          doc.id,
                                        )
                                      }
                                      className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-semibold"
                                    >
                                      Save
                                    </button>
                                  </div>
                                ) : (
                                  <span className="text-xs font-medium text-slate-700">
                                    {doc.title}
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-2">
                                {/* Attach PDF File Input */}
                                <label className="text-[11px] text-slate-600 bg-white border border-slate-300 px-2 py-1 rounded cursor-pointer hover:bg-slate-100">
                                  {doc.fileName ? doc.fileName : "Attach PDF"}
                                  <input
                                    type="file"
                                    accept="application/pdf"
                                    className="hidden"
                                    onChange={(e) =>
                                      handleFileUpload(
                                        e,
                                        brand.id,
                                        product.id,
                                        doc.id,
                                      )
                                    }
                                  />
                                </label>

                                <button
                                  onClick={() => startRename(doc.id, doc.title)}
                                  className="p-1 text-slate-400 hover:text-blue-600"
                                >
                                  <FaPen size={11} />
                                </button>
                                <button
                                  onClick={() =>
                                    deleteDocument(brand.id, product.id, doc.id)
                                  }
                                  className="p-1 text-slate-400 hover:text-red-600"
                                >
                                  <FaTrash size={11} />
                                </button>
                              </div>
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
