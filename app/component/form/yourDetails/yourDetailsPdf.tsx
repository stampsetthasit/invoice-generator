/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Image, Text, View, pdf } from "@react-pdf/renderer";
import { pdfContainers, pdfTypography } from "@/lib/pdfStyles";

export const YourDetailsPDF: React.FC<YourDetails> = ({
  yourEmail,
  yourName,
  yourAddress,
  yourCity,
  yourState,
  yourCountry,
  yourLogo,
  yourTaxId,
  yourZip,
  yourPhone
}) => (
  <View style={pdfContainers.YourDetails}>
    <Text style={{ ...pdfTypography.title, marginBottom: 14 }}>From</Text>

    <View style={pdfContainers.imageContainer}>
      {yourLogo && (
        <Image style={{ height: 40, borderRadius: 6 }} src={yourLogo} />
      )}
    </View>
    {yourName && <Text style={pdfTypography.text2xl}>{yourName}</Text>}
    {yourEmail && (
      <Text style={{ ...pdfTypography.description, marginBottom: 12 }}>
        {yourEmail}
      </Text>
    )}
    <View style={pdfTypography.description}>
      {yourAddress && <Text>{yourAddress}</Text>}
      {(yourCity || yourState || yourCountry || yourZip) && (
        <Text style={{ marginBottom: 2 }}>
          {yourCity}, {yourState}, {yourCountry}, {yourZip}
        </Text>
      )}
      {yourPhone && <Text style={{ marginBottom: 4 }}>{yourPhone}</Text>}
      {yourTaxId && <Text>เลขประจําตัวผู้เสียภาษี: {yourTaxId}</Text>}
    </View>
  </View>
);
