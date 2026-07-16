"use client";

import { useCallback, useEffect, useState } from "react";
import { loadCatalog, saveCatalog } from "@/bags/lib/storage";
import type { PackCatalogItem } from "@/bags/lib/types";

export function useCatalog() {
  const [catalog, setCatalog] = useState<PackCatalogItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setCatalog(loadCatalog());
    setLoaded(true);
  }, []);

  const persist = useCallback((next: PackCatalogItem[]) => {
    setCatalog(next);
    saveCatalog(next);
  }, []);

  const addPack = useCallback(
    (pack: PackCatalogItem) => {
      persist([...catalog, pack]);
    },
    [catalog, persist],
  );

  const updatePack = useCallback(
    (id: string, updates: Partial<PackCatalogItem>) => {
      persist(
        catalog.map((p) => (p.id === id ? { ...p, ...updates } : p)),
      );
    },
    [catalog, persist],
  );

  const deletePack = useCallback(
    (id: string) => {
      persist(catalog.filter((p) => p.id !== id));
    },
    [catalog, persist],
  );

  const getPack = useCallback(
    (id: string) => catalog.find((p) => p.id === id),
    [catalog],
  );

  return {
    catalog,
    loaded,
    addPack,
    updatePack,
    deletePack,
    getPack,
  };
}
