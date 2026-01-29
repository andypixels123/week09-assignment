//TODO: render a form to INSERT post data into the posts table
//- We also need to insert the userId into the posts table, make sure you have some SQL that READS the userId from the user's table OR use the auth() function from clerk to get the userId
import Header from "@/components/Header";
export default function NewPost() {
  return (
    <>
      <Header />
      <h1>Create a new post!</h1>
      <form action="">
        <label htmlFor="title">post title</label>
        <input type="text" name="title" />
        <label htmlFor="comment"></label>
        <textarea type="text" rows={5} name="comment"></textarea>
        <button type="submit">post</button>
      </form>
    </>
  );
}
