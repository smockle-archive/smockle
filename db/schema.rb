# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20121221072213) do

  create_table "messages", :force => true do |t|
    t.string   "first"
    t.string   "last"
    t.string   "organization"
    t.string   "email"
    t.string   "phone"
    t.integer  "reason_id"
    t.text     "message"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  add_index "messages", ["reason_id"], :name => "index_messages_on_reason_id"

  create_table "projects", :force => true do |t|
    t.string   "client"
    t.string   "name"
    t.string   "name_es"
    t.string   "quote"
    t.string   "quote_es"
    t.text     "message"
    t.text     "message_es"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "reasons", :force => true do |t|
    t.string   "reason"
    t.string   "reason_es"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
