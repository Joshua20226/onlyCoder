from pymongo import MongoClient


def main():
    uri = "mongodb+srv://test_user:testpassword@jkmongo.knddllg.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

    db_connection = MongoClient(uri)

    def check_db_connection():
        try:
            db_connection.admin.command('ping')
            return True
        except Exception as e:
            print(e)
            return False

    assert check_db_connection() == True

    return db_connection


if __name__ == '__main__':
    main()
