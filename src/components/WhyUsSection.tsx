"use client";

import { useEffect, useState } from "react";

import "aos/dist/aos.css";

import { getWhyUsContent } from "@/lib/api/whyUs";
import { WhyUsContent } from "@/types/whyUs";
import styles from "@/styles/whyUs.module.css";
import Container from "./Container";

export default function WhyUsSection() {
  const [data, setData] = useState<WhyUsContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getWhyUsContent();
        setData(response);
      } catch (err) {
        console.error("Error fetching WhyUs content:", err);
        setError("Failed to load data.");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  if (!data) return null;

  return (
    <section id="why-us" className={styles.section}>
      <Container>
        <h2 className={styles.heading} data-aos="fade-in">
          {data.heading}
        </h2>
        <ul className={styles.list}>
          {data.benefits.map((benefit, index) => (
            <li
              key={benefit.id}
              className={styles.item}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <span className={styles.label}>{benefit.title}</span>
              <p className={styles.text}>{benefit.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
