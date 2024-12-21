import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, TextInput, Textarea } from "flowbite-react";


const EditBooks = () => {
  const { id } = useParams();
  const {
    bookTitle,
    authorName,
    imageUrl,
    category,
    bookDescription,
    bookPDFURL,
  } = useLoaderData();
  console.log(category);
  
    const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const updateBookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPDFURL
    }

    // console.log(bookObj);
    fetch(`http://localhost:3000/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book updated successfully")
      console.log(data);
      // form.reset();
    })
  };
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3x1 font-bold">Update the book data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name="bookTitle"
              type="text"
              placeholder="Book name"
              required
              defaultValue={bookTitle}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              name="authorName"
              type="text"
              placeholder="Author name"
              required
              defaultValue={authorName}
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book image URL" />
            </div>
            <TextInput
              id="imageUrl"
              name="imageUrl"
              type="text"
              placeholder="Book image URL"
              required
              defaultValue={imageUrl}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <select
              name="categoryName"
              id="inputState"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map((option) => (
                <option value={option} key={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Enter description"
            required
            className="w-full"
            rows={5}
            defaultValue={bookDescription}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            placeholder="Book PDF URL"
            required
            type="text"
            defaultValue={bookPDFURL}
          />
        </div>
        <Button type="submit" className="">Update Book</Button>
      </form>
    </div>
  );

};

export default EditBooks;
