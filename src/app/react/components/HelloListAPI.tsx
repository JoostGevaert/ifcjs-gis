"use client";

import React, { useEffect, useState } from "react";

interface Person {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
}

interface RandomUserAPIResponse {
  results: Person[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}

export default function HelloListAPI() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    // Get data from API with fetch().then()
    // fetch("https://randomuser.me/api?results=5").then(
    //     (response) => {
    //         if (response) {
    //             response.json().then((data) => {
    //                 const newNames: string[] = []
    //                 data.results.forEach((result: Person) => {
    //                     newNames.push(result.name.first)
    //                 });
    //                 setNames(newNames);
    //             })
    //         }
    //     }
    // )

    const fetchNames = async () => {
      const response = await fetch("https://randomuser.me/api?results=5");
      if (response) {
        const data: RandomUserAPIResponse = await response.json();
        const newNames: string[] = [];
        data.results.forEach((result: Person) => {
          newNames.push(result.name.first);
        });
        setNames(newNames);
      }
    };
    fetchNames();

  }, []);

  return (
    <>
      <h3>Some random users</h3>
      <ul>
        {Boolean(names.length) &&
          names.map((name, i) => <li key={`${i}:${name}`}>{name}</li>)}
      </ul>
    </>
  );
}
