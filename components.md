# DATA

## Data layer

- List of ToDo's:
  - id
  - name
  - isDone

## Data modifications

- Load Todo List
- Create a ToDo
- Toggle ToDo status of isDone
- Delete ToDo

# COMPONENTS

## APP

- Shows layout

## Layout

- Shows Form
- Shows List of Todos

## Form

- Recieves the action of Create ToDo
- Shows an input for the new ToDo with label "New ToDo"
- Shows a button "Create ToDo" to submit the form
- On submit executes the recived action of Create ToDO

## List of ToDos

- Recieves the list of ToDos
- Recieves the action of load ToDos
- Sends a ToDo to each ToDo component

## ToDo

- Recieves a ToDo
- Recieves toggle toDo isDone action
- Recieves delete toDo action
- Shows the name of ToDo in a span
- Shows a Button Component that toggle isDone
- Shows a Button Component that Delete ToDos
- Sends "🔳" to button component that shows isDone if done is false
- Sends "✅" to button component that shows isDone if done is true
- Sends "🗑️" to button component that delete ToDo
- Sends toggle ToDo isDone action to button component that shows if its done
- Sends delete ToDo action to button component that delete student

## Button

- Recieves an action
- Recieves an icon
- Show the recieves icon
- onClick executes the given action
