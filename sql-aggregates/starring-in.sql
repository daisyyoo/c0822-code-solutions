select count("genreId") as "Number",
    "genres"."name" as "Genre"
  from "genres"
  join "filmGenre" using ("genreId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."firstName" = 'Lisa'
    and "actors"."lastName" = 'Monroe'
  group by "genres"."name";
