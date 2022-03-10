let products = {
  data: [
    {
      attractionName: "Marcus Theaters",
      category: "Movie-Theater",
      rating: "4",
      image: "Images/MarcusTheaters.jpg",
      link: "Attractions/MarcusTheaters.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "NotActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "725 Johnson Drive"
    },
    {
      attractionName: "South County Mall",
      category: "Store",
      rating: "5",
      image: "Images/SouthCountyMall.jpg",
      link: "Attractions/SouthCountyMall.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "NotActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Mask-Required",
      address: "9100 Ridge Lane"
    },
    {
      attractionName: "Jim’s Arcade Center",
      category: "N/A",
      rating: "4",
      image: "Images/JimsArcadeCenter.jpg",
      link: "Attractions/Jim'sArcadeCenter.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "NotActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "7689 Smith Store Avenue"
    },
    {
      attractionName: "Bizlandia Ice Rink",
      category: "n/a",
      rating: "5",
      image: "Images/BizlandiaIceRink.jpg",
      link: "Attractions/BizlandiaIceRink.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "81 Arcadia Drive"
    },
    {
      attractionName: "Bizlandia Bowling",
      category: "n/a",
      rating: "4",
      image: "Images/BizlandiaBowling.jpg",
      link: "Attractions/BizlandiaBowling.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "8428 West Thompson Street"
    },
    {
      attractionName: "Bizlandia Mountain",
      category: "Park",
      rating: "5",
      image: "Images/BizlandiaMountain.jpg",
      link: "Attractions/BizlandiaMountain.html",
      inside: "NotInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Not-Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "14 Longfellow Street"
    },
    {
      attractionName: "Bizlandia Roller Rink",
      category: "n/a",
      rating: "4",
      image: "Images/BizlandiaRollerRink.jpg",
      link: "Attractions/BizlandiaRollerRink.html",
      inside: "Inside",
      outside: "NotOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "18 Blackburn Street"
    },
    {
      attractionName: "Skatopia",
      category: "Park",
      rating: "5",
      image: "Images/Skatopia.jpg",
      link: "Attractions/Skatopia.html",
      inside: "Inside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "86 Richardson Drive"
    },
    {
      attractionName: "Wild Water",
      category: "Amusement-Park",
      rating: "5",
      image: "Images/WildWater.jpg",
      link: "Attractions/WildWater.html",
      inside: "n/a",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Not-Reservation-Required",
      maskRequired: "Not-Mask-Required",
      address: "7940 E. Fairway Street"
    },
    {
      attractionName: "Bizlandia Art Museum",
      category: "Museum",
      rating: "4",
      image: "Images/BizlandiaArtMuseum.jpg",
      link: "Attractions/BizlandiaArtMuseum.html",
      inside: "Inside",
      outside: "n/a",
      active: "n/a",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "Mask-Required",
      address: "61 Brickell Drive"
    },
    {
      attractionName: "Museum of History",
      category: "Museum",
      rating: "5",
      image: "Images/HistoryMuseum.jpg",
      link: "Attractions/MuseumOfHistory.html",
      inside: "Inside",
      outside: "n/a",
      active: "n/a",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NotGood-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "Mask-Required",
      address: "9380 Railroad Avenue"
    },
    {
      attractionName: "Science Center",
      category: "Museum",
      rating: "5",
      image: "Images/ScienceCenter.jpg",
      link: "Attractions/ScienceCenter.html",
      inside: "Inside",
      outside: "Outside",
      active: "n/a",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Not-Pets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "Mask-Required",
      address: "3 Alderwood Drive"
    },
    {
      attractionName: "Dog’s Day Out",
      category: "Park",
      rating: "5",
      image: "Images/DogPark.jpg",
      link: "Attractions/Dog'sDayOut.html",
      inside: "NotInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "NotMask-Required",
      address: "7273 Rock Creek Drive"
    },
    {
      attractionName: "Bizlandia Library",
      category: "n/a",
      rating: "4",
      image: "Images/Library.jpg",
      link: "Attractions/BizlandiaLibrary.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "Mask-Required",
      address: "35 Meadowbrook Avenue"
    },
    {
      attractionName: "Lake Bizlandia",
      category: "Park",
      rating: "5",
      image: "Images/Lake.jpg",
      link: "Attractions/LakeBizlandia.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "NMask-Required",
      address: "3 North Grant Street"
    },
    {
      attractionName: "Bizlandia Shut-Ins",
      category: "Park",
      rating: "5",
      image: "Images/Shutins.jpg",
      link: "Attractions/BizlandiaShut-Ins.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "NMask-Required",
      address: "709 South Main Road"
    },
    {
      attractionName: "Pan-Asia Supermarket",
      category: "Store",
      rating: "4",
      image: "Images/PanAsia.png",
      link: "Attractions/Pan-AsiaSupermarket.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NotReservation-Required",
      maskRequired: "Mask-Required",
      address: "339 4th Drive"
    },
    {
      attractionName: "Teppanyaki Steakhouse",
      category: "Restaurant",
      rating: "5",
      image: "Images/Teppanyaki.jpg",
      link: "Attractions/TeppanyakiSteakhouse.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "60 Saxon Drive"
    },
    {
      attractionName: "Concert Park",
      category: "Park",
      rating: "5",
      image: "Images/ConcertPark.jpg",
      link: "Attractions/ConcertPark.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "24 East Bellevue Road"
    },
    {
      attractionName: "Busch Stadium",
      category: "Sporting-Event",
      rating: "5",
      image: "Images/BuschStadium.jpg",
      link: "Attractions/BuschStadium.html",
      inside: "NInside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "58 Primrose Street"
    },
    {
      attractionName: "Honda Center",
      category: "Sporting-Event",
      rating: "4",
      image: "Images/HondaCenter.jpg",
      link: "Attractions/HondaCenter.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "7703 Water Street"
    },
    {
      attractionName: "AT&T Stadium",
      category: "Sporting-Event",
      rating: "4",
      image: "Images/AT&TStadium.jpg",
      link: "Attractions/AT&TStadium.html",
      inside: "Inside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "7269 Piper Street"
    },
    {
      attractionName: "Chase Center",
      category: "Sporting-Event",
      rating: "5",
      image: "Images/ChaseCenter.jpg",
      link: "Attractions/ChaseCenter.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "9646 Arlington Street"
    },
    {
      attractionName: "Lucas Oil Raceway",
      category: "Sporting-Event",
      rating: "5",
      image: "Images/LucasOil.jpg",
      link: "Attractions/LucasOilRaceway.html",
      inside: "NInside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "7075C Sherwood Avenue"
    },
    {
      attractionName: "Fast Kartz",
      category: "n/a",
      rating: "5",
      image: "Images/FastKartz.jpg",
      link: "Attractions/FastKartz.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "7105 High Point Street"
    },
    {
      attractionName: "Ultrazone Laser Tag",
      category: "n/a",
      rating: "5",
      image: "Images/LaserTag.jpg",
      link: "Attractions/UltrazoneLaserTag.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "80 Arnold Drive"
    },
    {
      attractionName: "Skirmish Paintball",
      category: "n/a",
      rating: "4",
      image: "Images/Paintball.jpg",
      link: "Attractions/SkirmishPaintball.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "892 San Juan Street"
    },
    {
      attractionName: "Bizlandia Carnival",
      category: "n/a",
      rating: "4",
      image: "Images/Carnival.jpg",
      link: "Attractions/BizlandiaCarnival.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "7354 Berkshire Avenue"
    },
    {
      attractionName: "Honeycomb Art",
      category: "n/a",
      rating: "5",
      image: "Images/Honeycomb.jpg",
      link: "Attractions/HoneycombArt.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "Mask-Required",
      address: "864 Atlantic Street"
    },
    {
      attractionName: "Xtreme Xperience",
      category: "n/a",
      rating: "5",
      image: "Images/XtremeXperience.jpg",
      link: "Attractions/XtremeXperience.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "3 South Ashley Street"
    },
    {
      attractionName: "Patrick’s Putt-Putt",
      category: "n/a",
      rating: "4",
      image: "Images/MiniGolf.jpg",
      link: "Attractions/Patrick'sPutt-Putt.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "976 E. Bridge Lane"
    },
    {
      attractionName: "Bizlandia Park Golf",
      category: "n/a",
      rating: "5",
      image: "Images/GolfPark.jpg",
      link: "Attractions/BizlandiaParkGolf.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "805 Forest Street"
    },
    {
      attractionName: "Dave’s Drive In",
      category: "Movie-Theater",
      rating: "5",
      image: "Images/DriveIn.jpg",
      link: "Attractions/Dave'sDriveIn.html",
      inside: "NInside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "398 N. Locust Street"
    },
    {
      attractionName: "Lumberjack Axe Throwing",
      category: "n/a",
      rating: "5",
      image: "Images/AxeThrowing.jpg",
      link: "Attractions/LumberjackAxeThrowing.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "61 Randall Mill Street"
    },
    {
      attractionName: "Olympia Fitness Center",
      category: "n/a",
      rating: "5",
      image: "Images/FitnessCenter.jpg",
      link: "Attractions/OlympiaFitnessCenter.html",
      inside: "Inside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "78 South Sierra Drive"
    },
    {
      attractionName: "Andy’s Archery Center",
      category: "n/a",
      rating: "4",
      image: "Images/ArcheryCenter.jpg",
      link: "Attractions/Andy'sArcheryCenter.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "42 Fifth Drive"
    },
    {
      attractionName: "Rocklands Rock Climbing",
      category: "n/a",
      rating: "5",
      image: "Images/Rocklands.jpg",
      link: "Attractions/RocklandsRockClimbing.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "Pets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "730 Shipley Lane"
    },
    {
      attractionName: "Upper Limits Climbing",
      category: "n/a",
      rating: "4",
      image: "Images/UpperLimits.jpg",
      link: "Attractions/UpperLimitsClimbing.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "159 Durham Drive"
    },
    {
      attractionName: "Sky Zone",
      category: "n/a",
      rating: "4",
      image: "Images/SkyZone.jpg",
      link: "Attractions/SkyZone.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "55 Young Drive"
    },
    {
      attractionName: "Pasta House",
      category: "Restaurant",
      rating: "4",
      image: "Images/PastaHouse.jpg",
      link: "Attractions/PastaHouse.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "973 Walt Whitman Street"
    },
    {
      attractionName: "Bizlandia Zoo",
      category: "n/a",
      rating: "5",
      image: "Images/Zoo.jpg",
      link: "Attractions/BizlandiaZoo.html",
      inside: "Inside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "50 Fairground Street"
    },
    {
      attractionName: "Sandy’s Petting Zoo",
      category: "n/a",
      rating: "4",
      image: "Images/PettingZoo.jpg",
      link: "Attractions/Sandy'sPettingZoo.html",
      inside: "NInside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "7 N. Devon Street"
    },
    {
      attractionName: "Justin’s Aquarium",
      category: "n/a",
      rating: "5",
      image: "Images/Aquariam.jpg",
      link: "Attractions/Justin'sAquariam.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "708 William Avenue"
    },
    {
      attractionName: "Custom Candy",
      category: "Store",
      rating: "5",
      image: "Images/CustomCandy.jpg",
      link: "Attractions/CustomCandy.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "10 Oak Meadow Avenue"
    },
    {
      attractionName: "Pistol Point Shooting Range",
      category: "n/a",
      rating: "5",
      image: "Images/PistolPoint.jpg",
      link: "Attractions/PistolPointShootingRange.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "9532 Old Taylor Street"
    },
    {
      attractionName: "Top Golf",
      category: "n/a",
      rating: "5",
      image: "Images/TopGolf.jpg",
      link: "Attractions/TopGolf.html",
      inside: "Inside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "8 Oak Valley Drive"
    },
    {
      attractionName: "Bizlandia Casino",
      category: "n/a",
      rating: "4",
      image: "Images/Casino.jpg",
      link: "Attractions/BizlandiaCasino.html",
      inside: "Inside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "679 Van Dyke Street"
    },
    {
      attractionName: "The Botanical Gardens of Bizlandia",
      category: "Park",
      rating: "5",
      image: "Images/BotanicalGardens.jpg",
      link: "Attractions/TheBotanicalGardensOfBizlandia.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "21 Strawberry Road"
    },
    {
      attractionName: "Disneyland Bizlandia",
      category: "Amusement-Park",
      rating: "5",
      image: "Images/DisneyLand.jpg",
      link: "Attractions/DisneylandBizlandia.html",
      inside: "Inside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "71 Cambridge Road"
    },
    {
      attractionName: "Universal Bizlandia",
      category: "Amusement-Park",
      rating: "5",
      image: "Images/Universal.jpg",
      link: "Attractions/UniversalBizlandia.html",
      inside: "Inside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "82 S. Buttonwood Street"
    },
    {
      attractionName: "Six Flags Bizlandia",
      category: "Amusement-Park",
      rating: "4",
      image: "Images/SixFlags.jpg",
      link: "Attractions/SixFlagsBizlandia.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "7172 Devon Street"
    },
    {
      attractionName: "Ultimate Pizza",
      category: "Restaurant",
      rating: "4",
      image: "Images/UltimatePizza.jpg",
      link: "Attractions/UltimatePizza.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "12 Court Lane"
    },
    {
      attractionName: "Wings + Burgers",
      category: "Restaurant",
      rating: "5",
      image: "Images/WingsBurgers.jpg",
      link: "Attractions/Wings+Burgers.html",
      inside: "Inside",
      outside: "NOutside",
      active: "NActive",
      budgetFriendly: "Budget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "NReservation-Required",
      maskRequired: "NMask-Required",
      address: "84 North Miller Street"
    },
    {
      attractionName: "Bizlandia Skydiving",
      category: "n/a",
      rating: "5",
      image: "Images/Skydiving.jpg",
      link: "Attractions/BizlandiaSkydiving.html",
      inside: "NInside",
      outside: "Outside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "NGood-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "88 State Street"
    },
    {
      attractionName: "IFly Indoor Skydiving",
      category: "n/a",
      rating: "5",
      image: "Images/IFly.jpg",
      link: "Attractions/IFlyIndoorSkydiving.html",
      inside: "Inside",
      outside: "NOutside",
      active: "Active",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "91 Fairfield Drive"
    },
    {
      attractionName: "Bizlandia Helicopter Rides",
      category: "n/a",
      rating: "5",
      image: "Images/Helicopter.jpg",
      link: "Attractions/BizlandiaHelicopterRides.html",
      inside: "NInside",
      outside: "Outside",
      active: "NActive",
      budgetFriendly: "NBudget-Friendly",
      goodForCouples: "Good-For-Couples",
      goodForKids: "Good-For-Kids",
      petsAllowed: "NPets-Allowed",
      reservationRequired: "Reservation-Required",
      maskRequired: "NMask-Required",
      address: "543 E. Wall Avenue"
    },
  ],
};



var valueList = document.getElementById('valueList');
var text = '<span> you have selected : </span>';
var listArray = [];
var checkboxes = document.querySelectorAll('.checkbox');
for (var checkbox of checkboxes) {
  // let elements = document.querySelectorAll(".card");

  checkbox.addEventListener('click', function () {
    if (this.checked == true) {
      console.log(this.value);
      listArray.push(this.value);
      // valueList.innerHTML = text + listArray.join(' / ');
    }
    else {
      console.log('you unchecked the checkbox');
      listArray = listArray.filter(e => e !== this.value);
      // valueList.innerHTML = text + listArray.join(' / ');
    }
    console.log(listArray);
    console.log(listArray.includes('All'));
    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
      element.classList.add("hide");
      if (listArray.includes('All')) {
        element.classList.remove("hide");
        console.log("all");
      }
      else {
        for (let i = 0; i < listArray.length; i++) {
          if (element.classList.contains(listArray[i])) {
            element.classList.remove("hide");
          }
        }
      }
    });
  });

};


// console.log(listArray.includes('All'));
for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, i.inside, i.outside, i.active, i.budgetFriendly, i.goodForCouples, i.goodForKids, i.petsAllowed, i.reservationRequired, i.maskRequired, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let link = document.createElement("a");
  link.href = i.link;
  link.target = "_blank";
  link.innerHTML = i.attractionName.toUpperCase();
  link.classList.add("attraction-name");
  container.appendChild(link);
  // let name = document.createElement("h5");
  // name.classList.add("attraction-name");
  // name.innerText = i.attractionName.toUpperCase();
  // container.appendChild(name);
  //rating
  let rating = document.createElement("h3");
  rating.innerText = ""
  for (let j = 0; j < i.rating; j++) {
    rating.innerText += "★";
  }
  for (let j = i.rating; j < 5; j++) {
    rating.innerText += "☆";
  }
  container.appendChild(rating);

  let address = document.createElement("h4");
  address.innerText = i.address;

  container.appendChild(address);



  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}




let elements = document.querySelectorAll(".card");
elements.forEach((element) => {
  // element.classList.remove("hide");
  if (listArray.includes('All')) {
    element.classList.remove("hide");
    console.log("all");
  }
});

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".attraction-name");
  let cards = document.querySelectorAll(".card");
  console.log(searchInput);
  // console.log(elements);

  //loop through all elements
  elements.forEach((element, index) => {
    console.log(element.classList);
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      for (let i = 0; i < listArray.length; i++) {
        if (element.classList.contains(listArray[i])) {
          console.log(element.classList);
          element.classList.remove("hide");
        }
      }
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all attractions
window.onload = () => {
  elements.forEach((element) => {
    element.classList.remove("hide");
  });
};
