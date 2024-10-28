"use client"

import { cardData } from "@/utils/data"
import Link from "next/link"

import { useState, useEffect } from "react"
import Select from "react-select"

const Pillar = () => {
  const [selectedOptions, setSelectedOptions] = useState({})
  const [filteredCards, setFilteredCards] = useState(cardData)

  const handleSelectChange = (tab, selectedOption) => {
    setSelectedOptions({
      ...selectedOptions,
      [tab]: selectedOption,
    })
  }

  useEffect(() => {
    filterData()
  }, [selectedOptions])

  const filterData = () => {
    let filtered = cardData

    // Apply filter for 'Pillar'
    if (selectedOptions["Pillar"]) {
      filtered = filtered.filter(
        (card) => card.pillar === selectedOptions["Pillar"].value
      )
    }

    // Apply filter for 'Regions Covered'
    if (selectedOptions["Regions Covered"]) {
      filtered = filtered.filter((card) =>
        card.regionsCovered.includes(selectedOptions["Regions Covered"].value)
      )
    }

    setFilteredCards(filtered)
  }

  const getAvailablePillars = () => {
    const regionsCoveredFilter = selectedOptions["Regions Covered"]
    if (regionsCoveredFilter) {
      return [
        ...new Set(
          cardData
            .filter((card) =>
              card.regionsCovered.includes(regionsCoveredFilter.value)
            )
            .map((card) => card.pillar)
        ),
      ].map((pillar) => ({ value: pillar, label: pillar }))
    }
    return [...new Set(cardData.map((card) => card.pillar))].map((pillar) => ({
      value: pillar,
      label: pillar,
    }))
  }

  const getAvailableRegions = () => {
    const pillarFilter = selectedOptions["Pillar"]
    if (pillarFilter) {
      return [
        ...new Set(
          cardData
            .filter((card) => card.pillar === pillarFilter.value)
            .flatMap((card) => card.regionsCovered)
        ),
      ].map((region) => ({ value: region, label: region }))
    }
    return [...new Set(cardData.flatMap((card) => card.regionsCovered))].map(
      (region) => ({ value: region, label: region })
    )
  }

  return (
    <div className="max-w-screen-xl mx-auto mb-10 mt-7">
      <div className="flex flex-col items-center min-h-screen p-10">
        <div className="flex flex-col sm:flex-row gap-5 mb-10 w-full justify-center">
          {/* Pillar Selection */}
          <div className="w-full sm:w-1/2">
            <Select
              value={selectedOptions["Pillar"] || null}
              onChange={(selectedOption) =>
                handleSelectChange("Pillar", selectedOption)
              }
              options={getAvailablePillars()}
              isClearable={true}
              isSearchable={true}
              placeholder="Select a Pillar"
              className="w-full"
            />
          </div>

          {/* Regions Covered Selection */}
          <div className="w-full sm:w-1/2">
            <Select
              value={selectedOptions["Regions Covered"] || null}
              onChange={(selectedOption) =>
                handleSelectChange("Regions Covered", selectedOption)
              }
              options={getAvailableRegions()}
              isClearable={true}
              isSearchable={true}
              placeholder="Select a Region"
              className="w-full"
            />
          </div>
        </div>

        {/* Filtered Cards Display */}
        <div className="max-h-screen overflow-y-auto w-full">
          <div className="grid grid-cols-1 gap-5">
            {filteredCards.map((card, index) => (
              <div
                key={index}
                className={`p-5 rounded-md ${
                  index % 2 === 0 ? "bg-[#FFCA0B]" : "bg-[#1AB274]"
                }`}
              >
                {/* Organization Name */}
                <Link href={card.link} target="_blank">
                  <h3 className="font-bold text-lg text-black mb-3">
                    <span className="text-xl">Organization Name</span>:{" "}
                    {card.organizationName}
                  </h3>
                </Link>

                {/* International Presence */}
                {card.internationalPresence && (
                  <p>
                    <strong>International presence:</strong>{" "}
                    {card.internationalPresence}
                  </p>
                )}

                {/* Regions Covered */}
                <p>
                  <strong>Regions covered:</strong>{" "}
                  {card.regionsCovered.join(", ")}
                </p>

                {/* The Solution */}
                <p className="mt-3">
                  <strong>The Solution:</strong> {card.solution}
                </p>

                {/* Pillar */}
                <p className="mt-3">
                  <strong>Pillar:</strong> {card.pillar}
                </p>

                {/* Impact */}
                {card.impacts && (
                  <p className="mt-3">
                    <strong>Impact:</strong> {card.impacts}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pillar
