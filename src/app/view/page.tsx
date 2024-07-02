'use client'

import NavBar from "~/components/NavBar";
import styles from './page.module.sass';
import AuthRedirect from "~/components/AuthRedirect";
import { useEffect, useState } from "react";
import { getQuesters } from "../serverFunctions";
import { Quester as QuesterT } from "@prisma/client";
import { PIXEL_DEFAULT, Quester } from "~/components/Quester";
import { validateTexture } from "~/utils/texture";

export default function View() {
  const [questers, setQuesters] = useState<QuesterT[]>([]);

  useEffect(() => {
    (async () => {
      const result = await getQuesters();
      setQuesters(result);
    })();
  }, []);

  return (
    <main className={styles.main}>
      <AuthRedirect />
      <NavBar />
      <div className={styles.gallery}>
        {
          questers.map(quester => {
            const texture = JSON.parse(quester.textureData);
            if (!validateTexture(texture)) return <></>;
            else return <Quester key={quester.id} texture={texture} pixelSize={PIXEL_DEFAULT} />
          })
        }
      </div>
    </main>
  )
}