<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const notes = ref([])
const title = ref('')
const content = ref('')
const editingId = ref(null)
const editTitle = ref('')
const editContent = ref('')

// fetch notes
const loadNotes = async () => {
  const response = await axios.get('http://localhost:3000/api/notes')
  notes.value = response.data
}

onMounted(loadNotes)

// add note
const addNote = async () => {
  if (!title.value || !content.value) return

  await axios.post('http://localhost:3000/api/notes', {
    title: title.value,
    content: content.value
  })

  title.value = ''
  content.value = ''
  loadNotes()
}

// delete notes
const deleteNote = async (id) => {
  await axios.delete(`http://localhost:3000/api/notes/${id}`)
  loadNotes()
}

//  edit and update notes
const startEdit = (note) => {
  editingId.value = note.id
  editTitle.value = note.title
  editContent.value = note.content
}

const updateNote = async () => {
  await axios.put(`http://localhost:3000/api/notes/${editingId.value}`, {
    title: editTitle.value,
    content: editContent.value
  })

  editingId.value = null
  loadNotes()
}
</script>

<template>
  <div style="padding:40px; font-family: Arial">
    <h1>My Notes</h1>

    <h3>Add Note</h3>
    <input v-model="title" placeholder="Title" />
    <br><br>
    <textarea v-model="content" placeholder="Content"></textarea>
    <br><br>
    <button @click="addNote">Add Note</button>

    <hr><br>

    <div v-if="notes.length === 0">
      No notes yet.
    </div>

    <ul v-else>
      <li v-for="note in notes" :key="note.id">

        <!-- Normal view -->
        <div v-if="editingId !== note.id">
          <strong>{{ note.title }}</strong><br>
          {{ note.content }}
          <br><br>
          <button @click="startEdit(note)">Edit</button>
          <button @click="deleteNote(note.id)">Delete</button>
        </div>

        <!-- Edit view -->
        <div v-else>
          <input v-model="editTitle" />
          <br><br>
          <textarea v-model="editContent"></textarea>
          <br><br>
          <button @click="updateNote">Save</button>
          <button @click="editingId = null">Cancel</button>
        </div>

        <hr>
      </li>
    </ul>
  </div>
</template>