select "addresses"."line1" as "Address",
      "cities"."name" as "City",
      "addresses"."district" as "District",
      "countries"."name" as "Country"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId")
