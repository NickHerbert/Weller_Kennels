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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171025022248) do

  create_table "appointments", force: :cascade do |t|
  end

  create_table "deposits", force: :cascade do |t|
  end

  create_table "dogs", force: :cascade do |t|
    t.string   "full_name"
    t.string   "nickname"
    t.datetime "birthday",       default: '2017-10-25 02:24:18'
    t.datetime "passed_away"
    t.string   "breed",                                          null: false
    t.string   "sex",                                            null: false
    t.integer  "parent_id"
    t.integer  "lft",                                            null: false
    t.integer  "rgt",                                            null: false
    t.integer  "depth",          default: 0,                     null: false
    t.integer  "children_count", default: 0,                     null: false
    t.datetime "created_at",                                     null: false
    t.datetime "updated_at",                                     null: false
    t.index ["lft"], name: "index_dogs_on_lft"
    t.index ["nickname", "rgt", "lft", "parent_id"], name: "index_dogs_on_nickname_and_rgt_and_lft_and_parent_id"
    t.index ["parent_id"], name: "index_dogs_on_parent_id"
    t.index ["rgt"], name: "index_dogs_on_rgt"
  end

  create_table "dogs_users", force: :cascade do |t|
    t.integer "dog_id"
    t.integer "user_id"
    t.index ["dog_id"], name: "index_dogs_users_on_dog_id"
    t.index ["user_id"], name: "index_dogs_users_on_user_id"
  end

  create_table "litters", force: :cascade do |t|
    t.integer  "dam"
    t.integer  "sire"
    t.datetime "due_date"
    t.datetime "date_available"
    t.decimal  "deposit_amount"
    t.decimal  "puppy_price"
    t.integer  "dog_id"
  end

  create_table "pages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
